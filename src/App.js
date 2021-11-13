import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import { useState } from "react";
import CartItems from "./components/CartItems";

function App() {
  const [cardCount, setCardCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isEnabler, setIsEnabler] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  function addToCartHandeler(item, key) {
    console.log(item);
    setCardCount((prevState) => prevState + 1);
    setCartItems((prev) => [...prev, item]);
    let temp = isEnabler;
    temp[key] = !temp[key];
    setIsEnabler(temp);
  }

  function changeItemsHandeler(item, key) {
    setCardCount((prev) => prev - 1);
    setCartItems([...item]);
    let temp = isEnabler;
    temp[key] = !temp[key];
    setIsEnabler(temp);
  }
  return (
    <>
      <NavBar cardCount={cardCount}></NavBar>
      <Header></Header>
      <CartItems
        items={cartItems}
        onChangeItems={changeItemsHandeler}
      ></CartItems>

      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div class="col mb-5">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Fancy Product</h5>
                    $40.00 - $80.00
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <button class="btn btn-outline-dark mt-auto">
                      View options
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <div
                  class="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>

                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Special Item</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    <span class="text-muted text-decoration-line-through">
                      $20.00
                    </span>
                    $18.00
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    {isEnabler[0] ? (
                      ""
                    ) : (
                      <button
                        class="btn btn-outline-dark mt-auto"
                        onClick={() =>
                          addToCartHandeler(
                            { price: 18, name: "Special Item", id: 0 },
                            0
                          )
                        }
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <div
                  class="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>

                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Sale Item</h5>
                    <span class="text-muted text-decoration-line-through">
                      $50.00
                    </span>
                    $25.00
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    {isEnabler[1] ? (
                      ""
                    ) : (
                      <button
                        class="btn btn-outline-dark mt-auto"
                        onClick={() =>
                          addToCartHandeler(
                            { price: 25, name: "Sale Item", id: 1 },
                            1
                          )
                        }
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Popular Item</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    $40.00
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    {isEnabler[2] ? (
                      ""
                    ) : (
                      <button
                        class="btn btn-outline-dark mt-auto"
                        onClick={() =>
                          addToCartHandeler(
                            { price: 40, name: "Popular Item", id: 2 },
                            2
                          )
                        }
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <div
                  class="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>

                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Sale Item</h5>
                    <span class="text-muted text-decoration-line-through">
                      $50.00
                    </span>
                    $25.00
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    {isEnabler[3] ? (
                      ""
                    ) : (
                      <button
                        class="btn btn-outline-dark mt-auto"
                        onClick={() =>
                          addToCartHandeler(
                            { price: 25, name: "Sale Item", id: 3 },
                            3
                          )
                        }
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Fancy Product</h5>
                    $120.00 - $280.00
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <button class="btn btn-outline-dark mt-auto">
                      View options
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <div
                  class="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>

                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Special Item</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    <span class="text-muted text-decoration-line-through">
                      $20.00
                    </span>
                    $18.00
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    {isEnabler[4] ? (
                      ""
                    ) : (
                      <button
                        class="btn btn-outline-dark mt-auto"
                        onClick={() =>
                          addToCartHandeler(
                            { price: 18, name: "Special Item", id: 4 },
                            4
                          )
                        }
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Popular Item</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    $40.00
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    {isEnabler[5] ? (
                      ""
                    ) : (
                      <button
                        class="btn btn-outline-dark mt-auto"
                        onClick={() =>
                          addToCartHandeler(
                            { price: 40, name: "Popular Item", id: 5 },
                            5
                          )
                        }
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Your Website 2021
          </p>
        </div>
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}

export default App;
