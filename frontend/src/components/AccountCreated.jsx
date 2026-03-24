import { AuthLayout } from "./AuthLayout";
import { AuthButton } from "./AuthButton";
import { Link } from "react-router-dom";

export const AccountCreated = () => {
    return (
        <AuthLayout title="Account created successfully!">
            <AuthButton>
                <Link to="/">
                Go back to homepage
                </Link>
            </AuthButton>
        </AuthLayout>
    )
}