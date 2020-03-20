<?php

namespace App\Http\Controllers\Api;

use App\API\ApiError;
use App\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    /**
     * @var Product
     */

    private $product;

    public function __construct(Product $product)
    {
        $this->product = $product;
    }

    public function index()
    {

        return response()->json($this->product->paginate(10));

    }


    public function show($id)
    {
            $product = $this->product->find($id);

            if(! $product ) return response()->json(['data' => ['msg' => 'Produto não encontrado']], 404);
            $data = ['data' => $product];
            return response()->json($data);

    }

    public function store(Request $request)
    {
        try{
        $productData = $request->all();
        $this->product->create($productData);

        $return = ['data' => ['msg' => 'Produto cadastrado com sucesso!']];
        return response()->json($return, 201);

        }catch(\Exception $e){
            if(config('app.debug')){

            return response()->json(ApiError::errorMessage($e->getMessage(), 1010));
            }

            return response()->json(ApiError::errorMessage('Houve um erro ao Cadastrar', 1010));


        }
    }



    public function update(Request $request, $id)
    {
        try{
        $productData = $request->all();
        $product = $this->product->find($id);
        $product->update($productData);

        $return = ['data' => ['msg' => 'Produto atualizado com sucesso!']];
        return response()->json($return, 201);

        }catch(\Exception $e){
            if(config('app.debug')){

            return response()->json(ApiError::errorMessage($e->getMessage(), 1011));
            }

            return response()->json(ApiError::errorMessage('Houve um erro ao Editar', 1011));


        }
    }

    public function delete(Product $id)
    {
        try{

        $id->delete();
        return response()->json(['data' =>['msg' => 'Produto: ' . $id->name . 'Removido com sucesso!']], 200);

        }catch(\Exception $e){
            if(config('app.debug')){

            return response()->json(ApiError::errorMessage($e->getMessage(), 1012));
            }


            return response()->json(ApiError::errorMessage('houve um erro ao remover', 1012));


        }
    }
}

