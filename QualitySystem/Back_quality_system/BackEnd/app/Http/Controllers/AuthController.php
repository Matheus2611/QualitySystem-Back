<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Laravel\Passport\Http\Controllers\AccessTokenController;
use Laravel\Passport\TokenRepository;
use Lcobucci\JWT\Parser as JwtParser;
use League\OAuth2\Server\AuthorizationServer;
use Psr\Http\Message\ServerRequestInterface;


class AuthController extends Controller
{


   // login-authen function
   protected $server;
   protected $tokens;
   protected $jwt;


   public function __construct(AuthorizationServer $server,
                               TokenRepository $tokens,
                               JwtParser $jwt)
   {
       $this->jwt = $jwt;
       $this->server = $server;
       $this->tokens = $tokens;
   }


   public function login(ServerRequestInterface $request)
   {
       $controller = new AccessTokenController($this->server, $this->tokens, $this->jwt);

       try{
       $request = $request->withParsedBody($request->getParsedBody() +
       [
           'grant_type' => 'password',
           'client_id' => config('services.passport.client_id'),
           'client_secret' => config('services.passport.client_secret'),
       ]);

       return with(new AccessTokenController($this->server, $this->tokens, $this->jwt))
           ->issueToken($request);
        }catch(Exception $e) {
            if($e->getCode() === 401) {
                return response()->json('Credenciais inválidas', $e->getCode());
            }
        }
   }



   public function update(Request $request, User $user)
   {
     $data = $request->validate([
       'name' => 'required|string|max:255',
       'email' => 'required|string',
       'perfil' => 'required|string'
       ]);

       $user->update($data);

       return response($data, 200);
   }

   public function destroy(User $user)
   {
      $user->delete();

      return response($user, 200);
   }


   public function register(Request $request)
   {

       $request->validate([
           'name' => 'required|string|max:255',
           'email' => 'required|string|email|max:255|unique:users',
           'password' => 'required|string|min:6',
           'perfil' => 'required|string'
       ]);

       return User::create([
           'name' => $request->name,
           'email' => $request->email,
           'perfil' => $request->perfil,
           'password' => Hash::make($request->password),
       ]);
   }

   public function updateAuthUserPassword(Request $request)
   {
       $this->validate($request, [
           'current' => 'required',
           'password' => 'required|confirmed',
           'password_confirmation' => 'required'
       ]);


       $user = User::find(Auth::id());

       if (!Hash::check($request->current, $user->password)) {
           return response()->json(['errors' => ['current'=> ['Current password does not match']]], 403);
       }

       $user->password = Hash::make($request->password);
       $user->save();

       return $user;
   }

   public function logout()
   {
       auth()->user()->tokens->each(function ($token, $key) {
           $token->delete();
       });

       return response()->json('Logged out successfully', 200);
   }
}
