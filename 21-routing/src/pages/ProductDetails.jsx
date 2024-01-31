import { useNavigate, useParams } from "react-router-dom"

export default function ProductDetails() {
    const urlParams = useParams();
    const navigate = useNavigate();

    function buttonClickHandler() {
        navigate("/products")
    }
    return (
        <div>
            <h1>Product Details</h1>
            <p>These are the details for product: {urlParams.productId} </p>
            <button onClick={buttonClickHandler}>Back to Products</button>
        </div>
    )
}