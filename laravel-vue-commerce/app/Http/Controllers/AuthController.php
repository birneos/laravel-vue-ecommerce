<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request){
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
            'remember' => 'boolean'
        ]);

        $b_remember = $credentials['remember'] ?? false;
        unset($credentials['remember']);

        if(!Auth::attempt($credentials,$b_remember)){
            return response([
                'message' =>'Email or password is incorrect',
            ],422);
        }

        /**
         * @var User $user
         */
        $user = Auth::user();

        if(!$user->is_admin){
            Auth::logout();

            return response([
                'message' =>'You don\'t have permission to authenticate as admin',
            ],401);
        }

        $token = $user->createToken('main')->plainTextToken;

        return response([
           'user'=> new UserResource($user),
            'token' => $token
        ]);
    }

    public function logout(){

        /**
         * @var \App\Models\User $user
         */
        $user = Auth::user();

        $user->currentAccessToken()->delete();

        return response([
        ],204);

    }

    public function getUser(Request $request){
        return new UserResource($request->user());
    }
}
