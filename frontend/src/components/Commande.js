import { useEffect, React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOrder, taiterOrder } from "../actions/orderActions";
import { Link } from "react-router-dom";
import LoadingBox from "./LoadingBox";
import ErrorMessageBox from "./ErrorMessageBox";
export default function Commande(props) {
  const orderId = props.match.params.id;
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, order } = orderList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrder(orderId));
  }, [dispatch]);

  const Traite = (e) => {
    e.preventDefault();
    dispatch(taiterOrder(orderId));
    props.history.push("commandes");
    window.location.reload(false);
  };
  return (
    <div className="pdng-15">
      {/*if loading then , else if error, else*/}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <ErrorMessageBox variant="danger">{error}</ErrorMessageBox>
      ) : order ? (
        <div>
          <header className="font-cabin font-bold font-30 mrgnlft-15">
            {"Commande :" + order._id}
            <div className="d-flex justify-content-start">
              <small class="form-text font-18 text-muted font-cabin ">
                {"Status:"}
              </small>
              {order.traite ? (
                <small class="form-text font-18 font-cabin greenColor">
                  traité
                </small>
              ) : (
                <small class="form-text font-18 font-cabin redColor">
                  Non traité
                </small>
              )}
            </div>
          </header>

          <div className="simpleBorder mrgn-30">
            <div className="width-full pdng-20">
              <div>
                <header className="font-bold font-20 font-cabin pdgtp-5">
                  {"Nom d'utilisateur : " + order.shippingAddress.fullName}
                </header>
                <header className="font-bold font-20 font-cabin pdgtp-5">
                  {"Numero de telephone :"}
                </header>
                <header className="font-bold font-20 font-cabin pdgtp-5">
                  {"Wilaya :" + order.shippingAddress.address}
                </header>
                <header className="font-bold font-20 font-cabin pdgtp-5">
                  {"Adresse :" + order.shippingAddress.city}
                </header>
              </div>
              <div className="pdgtp-50">
                <header className="font-bold font-20 font-cabin pdgtp-5">
                  {"Produits :"}
                </header>
              </div>
              <div className="pdgtp-35">
                <table class="table table-bordered simpleBorder">
                  <thead>
                    <tr>
                      <th
                        className="font-normal"
                        style={{ width: "50%" }}
                        scope="col"
                      >
                        Nom du produit
                      </th>
                      <th className="font-normal" scope="col">
                        Prix unité
                      </th>
                      <th className="font-normal" scope="col">
                        Qantité
                      </th>
                      <th className="font-normal" scope="col">
                        Total
                      </th>
                    </tr>
                    {order.orderItems.map((item) => (
                      <tr>
                        <th className="font-normal" scope="col">
                          {item.name}
                        </th>
                        <th className="font-normal" scope="col">
                          {item.price}
                        </th>
                        <th className="font-normal" scope="col">
                          {item.qty}
                        </th>
                        <th className="font-normal" scope="col">
                          {item.qty * item.price}
                        </th>
                      </tr>
                    ))}
                    <th style={{ display: "hidden" }} scope="col"></th>
                    <th style={{ display: "hidden" }} scope="col"></th>
                    <th style={{ display: "hidden" }} scope="col"></th>
                    <th colspan="1">{order.totalPrice + "DA"}</th>
                  </thead>
                </table>
              </div>
            </div>
          </div>
          <div className="pdgtp-150 mrgnrgt-30 mrgnlft-30">
            <div className="d-flex flex-row-reverse">
              <button
                disabled={order.traite}
                onClick={Traite}
                style={{ width: "200px" }}
                className="p-2 font-cabin font-18 radius-25 loginOrRegisterButton "
              >
                Valider
              </button>
              <Link to="commandes">
                <button
                  style={{ width: "200px", marginRight: "20px" }}
                  className="p-2 font-cabin font-18 radius-25 loginOrRegisterButton "
                >
                  Annuler
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>No order found</div>
      )}
    </div>
  );
}
