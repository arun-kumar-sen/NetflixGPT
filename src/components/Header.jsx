import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    // onAuthStateChanged (kind of event listener) will be called everytime user log in or log out i.e authStateChange
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Sign in case
        // adding user info in store once user sign in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // sign out case / User is signed out
        // removing user info frome store once user sign out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // This will be unSubscribe when components unmount
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className=" flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={LOGO} alt="Logo" />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" src={user?.photoURL} alt="user icon" />
          <button
            onClick={handleSignOut}
            className="px-2 font-bold text-white "
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
