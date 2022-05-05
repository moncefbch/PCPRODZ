import React, { useEffect , useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct} from '../actions/ProductAction';
import { PRODUCT_CREATE_RESET } from "../Constants/ProductsConstants";

export default function AddProduct(props) {

  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [cpu, setCpu] = useState('');
  const [ram, setRam] = useState('');
  const [disque, setDisque] = useState('');
  const [gpu, setGpu] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [countInStock, setCountInStock] = useState('');



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
      dispatch({ type: PRODUCT_CREATE_RESET });
      props.history.push(`/`);
    }
  }, [createdProduct, dispatch, props.history, successCreate]);


  const createHandler = (e) => {
    e.preventDefault();
    dispatch(createProduct({
      name, brand, cpu, ram, disque, gpu, category, price, countInStock,
    }));
  };
  //
  const array = [
    "name", "brand", "cpu", "ram", "disque", "gpu", "category", "price", "countInStock",
  ];
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
             placeholder={`enter a  ${att}`}
             onChange={(e) => { if (att === "name") { setName(e.target.value) }
              else if (att === "brand") { setBrand(e.target.value) }
              else if (att === "cpu") { setCpu(e.target.value) }
              else if (att === "ram") { setRam(e.target.value) }
              else if (att === "disque") { setDisque(e.target.value) }
              else if (att === "gpu") { setGpu(e.target.value) }
              else if (att === "category") { setCategory(e.target.value) }
              else if (att === "price") { setPrice(e.target.value) }
              else if (att === "countInStock") { setCountInStock(e.target.value) }
              }}
             className="InputField font-cabin font-10" />
          </div>
        ))}
        <label
          style={{ cursor: "pointer", marginTop: "50px" }}
          for="file-input"
        >
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
        <input style={{ display: "none" }} id="file-input" type="file" />
        <div className="pdng-15">
        <button
          className="btn btn-primary font-cabin font-bold font-18"
          onClick={createHandler}
          disabled={loadingCreate}
        >
          {loadingCreate ? (
            <span className="spinner-border spinner-border-sm"></span>
          ) : (
            'Ajouter'
          )}
        </button>
        </div>
      </div>
    </div>
  );
}
