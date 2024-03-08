import { auth, googleProvider } from "@/config/firebase";
import { handleCreateUserInDB } from "@api/dbAPI";
import {
	signInWithEmailAndPassword,
	signOut,
	createUserWithEmailAndPassword,
	signInWithPopup,
	signInWithRedirect,
	getRedirectResult,
	UserCredential,
} from "firebase/auth";

export async function handleSignUp(
	name: string,
	email: string,
	password: string,
	photo: File | undefined
) {
	await createUserWithEmailAndPassword(auth, email, password);

	console.log("Signup successful");

	await handleCreateUserInDB(name, email, photo);
}

export async function handleSignUpWithGoogle() {
	try {
		const googleSignInDetails = await signInWithPopup(auth, googleProvider);
		console.log(
			"🚀 ~ handleSignUpWithGoogle ~ googleSignInDetails:",
			googleSignInDetails
		);
		handleCreateUserAfterSignUp(googleSignInDetails);
	} catch (error) {
		throw error;
	}
}

export async function handleSignUpWithGoogleRedirect() {
	await signInWithRedirect(auth, googleProvider);
}

export async function ifRedirectMakeUser() {
	const googleSignInDetails = await getRedirectResult(auth);
	console.log(
		"🚀 ~ ifRedirectMakeUser ~ googleSignInDetails:",
		googleSignInDetails
	);
	if (googleSignInDetails == null) return false;

	handleCreateUserAfterSignUp(googleSignInDetails);
	return true;
}

async function handleCreateUserAfterSignUp(
	googleSignInDetails: UserCredential
) {
	const { displayName, email, photoURL } = googleSignInDetails.user;

	if ((googleSignInDetails as any)?._tokenResponse?.isNewUser) {
		if (displayName && email) {
			await handleCreateUserInDB(
				displayName,
				email,
				photoURL || undefined
			);
		} else {
			console.log("One or more required fields are null");
		}
	}

	console.log("Signup with google successful");
}

export async function handleLogin(email: string, password: string) {
	await signInWithEmailAndPassword(auth, email, password);
	console.log("Login successful");
}

export async function handleSignOut() {
	await signOut(auth);
	console.log("Signout successful");
}
