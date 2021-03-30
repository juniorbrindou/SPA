<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    /**
	* Recupère la requette avec les identifiants
	* Retourne Un jeton Jason Web Token
	*
	* @return \Illuminate\Http\JsonResponse
	*/
	public function  login(Request $request)
	{
		// Veriffication des informations
		$validator = Validator::make($request->all(), [
			'email' => 'required|email',
			'password' => 'required|min:6',
		]);

		// Retour des Erreurs d'identifiants
		if ($validator->fails()) {
            ValidationMessageService::messageErrorInValidation($validator);
        }

		// Si l'authentification Echoue
		if (!$token = Auth::attempt($validator->validated())){
			return response()->json([
				'Status' => 'erreur', 'Message' => 'Email ou mot de passe incorrecte'
			], 401);
		}

		Session::create([
			"mac" => '24-d3-f2-fc-4a-a6 ff-ff-ff-ff-ff-ff 01-00-5e-00-00-16',
			"ip" => $_SERVER['REMOTE_ADDR'],
			"token" => $token,
			"utilisateur_id" => Auth::user()->id,
		]);
		Auth::user()->role;
		Auth::user()->civilite;
		return response()->json([
			'Status' => 'Succes',
			'Message' => 'Authentification Réussie',
			'Data' => [
				'user' => Auth::user(),
				'access_token' => $token,
				'token_type' => 'bearer',
			]
		], 200);
	}
}
