import { decrypt } from "dotenv";
import { generateToken } from "../utils/generateToken.js";
import bcrypt from "bcryptjs";
import User from "../model/User.model.js";
export const Register = async (req, res) => {
    try {
        const { userName, email, password, rePassword } = req.body;
        if (!userName || !email || !password || !rePassword) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long" });
        }
        if (rePassword !== password) {
            return res.status(400).json({ message: "Password does not match" });
        }
        const hasPassword = await bcrypt.hash(password, 12);



        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!regex.test(email)) {
            return res.status(400).json({ message: "Invalid email address" });
        }
        const newUser = await User.findOne({ email });
        if (newUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        generateToken(User._id, res);
        const user = new User({
            userName,
            email,
            password: hasPassword,
            image: ""
        });
        user.save();
        res.status(200).json({
            message: "User registered successfully", user: {
                id: user._id,
                userName: user.userName,
                email: user.email,
                image: user.image,
            }
        });


    } catch (error) {
        console.log("Error Register", error.message);
        res.status(500).json({ message: "Server error" });
    }
}

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Người dùng không tồn tại" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Mật khẩu không chính xác" });
        }
        generateToken(user._id, res);
        res.status(200).json({
            message: "User logged in successfully", user: {
                id: user._id,
                userName: user.userName,
                email: user.email,
                image: user.image,
            }
        });


    } catch (error) {
        console.log("Error Login", error.message);
        res.status(500).json({ message: "Server error" });

    }
}

export const Logout = (req, res) => {

    try {
        res.clearCookie("token");
        res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        console.log("Error Logout", error.message);
        res.status(500).json({ message: "Server error" });
    }
}

export const checkAuth = (req, res) => {

    try {
        res.status(200).json({ user: req.user });
    } catch (error) {
        console.log("Error checkAuth", error.message);
        res.status(500).json({ message: "Server error" });

    }
}