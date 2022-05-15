import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createProduct, updateProduct} from "../actions/ProductAction";
import {
  PRODUCT_CREATE_RESET,
  PRODUCT_UPDATE_RESET,
} from "../Constants/ProductsConstants";
import Axios from "axios";
import LoadingBox from "./LoadingBox";
import ErrorMessageBox from "./ErrorMessageBox";

export default function AddProduct(props) {
  const [product, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [cpu, setCpu] = useState("");
  const [ram, setRam] = useState("");
  const [disque, setDisque] = useState("");
  const [gpu, setGpu] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [image, setImage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await Axios.get(
        "/api/products/get" + props.match.params.id
      );
      setName(data._name);
      setBrand(data.brand);
      setPrice(data.price);
      setRam(data.ram);
      setDisque(data.disque);
      setCategory(data.category);
      setCpu(data.processeur);
      setCountInStock(data.countInStock);
      setGpu(data.gpu);
      setImage(data.image);
      setProducts(data);
    };
    fetchData();
  }, []);

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const dispatch = useDispatch();

  useEffect(() => {
    if (successCreate) {
      dispatch({type: PRODUCT_CREATE_RESET});
      props.history.push(`/`);
    }
  }, [createdProduct, dispatch, props.history, successCreate]);
  useEffect(() => {
    if (successUpdate) {
      props.history.push(`/admin/product${product._id}`);
    }
    if (!product || successUpdate) {
      dispatch({type: PRODUCT_UPDATE_RESET});
    }
  }, [product, dispatch, successUpdate, props.history]);

  const createHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProduct({
        name,
        brand,
        image,
        cpu,
        ram,
        disque,
        gpu,
        category,
        price,
        countInStock,
      })
    );
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: product._id,
        name,
        brand,
        image,
        cpu,
        ram,
        disque,
        gpu,
        category,
        price,
        countInStock,
      })
    );
  };

  const array = [
    "name",
    "brand",
    "cpu",
    "ram",
    "disque",
    "gpu",
    "category",
    "price",
    "countInStock",
  ];

  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const {userInfo} = userSignin;
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setLoadingUpload(true);
    try {
      console.log("rani hna");
      const {data} = await Axios.post("/api/uploads", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      if (!image) {
        setImage([data]);
      } else {
        image.push(data);
        setImage(image);
      }
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  return (
    <div>
      <div className="pdng-15">
        <header className="font-cabin font-bold font-30 mrgnlft-15">
          Ajouter une annonce
        </header>
      </div>
      <div className="pdng-45">
        {array.map((att) => (
          <div className="form-group pdngbtm-10">
            <label
              for="exampleInputEmail1"
              className="font-bold font-cabin font-18"
            >
              {att}
            </label>
            <input
              id={att}
              type="text"
              value={(() => {
                switch (att) {
                  case "name":
                    return name;
                  case "brand":
                    return brand;
                  case "cpu":
                    return cpu;
                  case "ram":
                    return ram;
                  case "disque":
                    return disque;
                  case "gpu":
                    return gpu;
                  case "category":
                    return category;
                  case "price":
                    return price;
                  case "countInStock":
                    return countInStock;
                  default:
                    return "";
                }
              })()}
              placeholder={`enter a  ${att}`}
              onChange={(e) => {
                if (att === "name") {
                  setName(e.target.value);
                } else if (att === "brand") {
                  setBrand(e.target.value);
                } else if (att === "cpu") {
                  setCpu(e.target.value);
                } else if (att === "ram") {
                  setRam(e.target.value);
                } else if (att === "disque") {
                  setDisque(e.target.value);
                } else if (att === "gpu") {
                  setGpu(e.target.value);
                } else if (att === "category") {
                  setCategory(e.target.value);
                } else if (att === "price") {
                  setPrice(e.target.value);
                } else if (att === "countInStock") {
                  setCountInStock(e.target.value);
                }
              }}
              className="InputField font-cabin font-10"
            />
          </div>
        ))}
        <div class="gallery-uploader-wrap">
          {image ? (
            <div>
              {image.map((item) => (
                <label class="uploader-img">
                  <img width="100" src={item} alt="image" />
                </label>
              ))}
            </div>
          ) : (
            <div></div>
          )}
          <label class="uploader-img">
            <input type="file" name="lorem" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#999"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M16.83 4L15 2H9L7.17 4H2v16h20V4h-5.17zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
            </svg>
          </label>
        </div>
        <div>
          <label
            style={{cursor: "pointer", marginTop: "50px"}}
            htmlFor="imageFile"
          >
            {" "}
            <div
              style={{
                backgroundColor: "#F1F1F1",
                width: "350px",
                height: "350px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src="/images/AddImage.png"
                width={"20%"}
                height={"20%"}
                style={{
                  margin: "auto",
                }}
              />
            </div>
          </label>
          <input
            type="file"
            id="imageFile"
            style={{display: "none"}}
            label="Choose Image"
            onChange={uploadFileHandler}
          ></input>
          {loadingUpload && <LoadingBox></LoadingBox>}
          {errorUpload && (
            <ErrorMessageBox variant="danger">{errorUpload}</ErrorMessageBox>
          )}
        </div>
        {/*       <label style={{cursor: "pointer", marginTop: "50px"}} for="file-input">
          <div
            style={{
              backgroundColor: "#F1F1F1",
              width: "350px",
              height: "350px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="/images/AddImage.png"
              width={"20%"}
              height={"20%"}
              style={{
                margin: "auto",
              }}
            />
          </div>
        </label>
            <input style={{display: "none"}} id="file-input" type="file" /> */}
        {product._id ? (
          <div className="pdng-15">
            <button
              className="btn btn-primary font-cabin font-bold font-18"
              onClick={submitHandler}
              disabled={loadingUpdate}
            >
              {loadingUpdate ? (
                <span className="spinner-border spinner-border-sm"></span>
              ) : (
                "editer"
              )}
            </button>
          </div>
        ) : (
          <div className="pdng-15">
            <button
              className="btn btn-primary font-cabin font-bold font-18"
              onClick={createHandler}
              disabled={loadingCreate}
            >
              {loadingCreate ? (
                <span className="spinner-border spinner-border-sm"></span>
              ) : (
                "Ajouter"
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
