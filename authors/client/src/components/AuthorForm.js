import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AuthorForm = () => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/author", { name })
            .then((response) => {
                console.log(response);
                navigate("/");
            })
            .catch((err) => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-6" style={{marginLeft: "280px"}}>
                    <Link to="/">Home</Link>
                    <p className="purple-text">Add a new author:</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name: </label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                            {errors.name ? <p>{errors.name.message}</p> : null}
                        </div>
                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                        <Link to={"/"}>
                            <button className="btn btn-danger">Cancel</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AuthorForm;