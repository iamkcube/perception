import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useQuery } from "@tanstack/react-query";

interface AuthContextProps {
	userLoggedIn: boolean;
	currentUser: User | null;
	userDoc:
		| {
				createdAt?: { seconds: number; nanoseconds: number };
				updatedAt?: { seconds: number; nanoseconds: number };
				email?: string;
				name?: string;
				photoUrl?: string;
				userEvents?: string[];
		  }
		| undefined;
	setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function useAuth() {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}

interface childrenProps {
	children: ReactNode;
}

export function AuthProvider({ children }: childrenProps) {
	const [currentUser, setCurrentUser] = useState<User | null>(null);
	const [userLoggedIn, setUserLoggedIn] = useState(false);
	const [loading, setLoading] = useState(true);

	const {
		data: userDoc,
		// isFetching: isFetchingUserDoc,
		// error:userDocError,
	} = useQuery({
		queryKey: ["userDoc", currentUser?.email],
		queryFn: async () => {
			if (currentUser?.email) {
				const userDocRef = doc(db, "users", currentUser.email);
				const userDocSnap = await getDoc(userDocRef);

				if (userDocSnap.exists()) {
					return { ...userDocSnap.data(), email: userDocRef.id };
				}
			}

			return {
				date: { seconds: 0, nanoseconds: 0 },
				description: "",
				eventName: "",
				id: "",
				location: "",
				userEvents: [],
			};
		},
		enabled: !!currentUser?.email,
	});

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, initializeUser);
		return unsubscribe;
	}, []);

	async function initializeUser(user: User | null) {
		if (user) {
			setCurrentUser({ ...user });
			setUserLoggedIn(true);
		} else {
			setCurrentUser(null);
			setUserLoggedIn(false);
		}
		setLoading(false);
	}

	const value = {
		userLoggedIn,
		currentUser,
		userDoc,
		setCurrentUser,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
