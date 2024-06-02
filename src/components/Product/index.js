import React from 'react'
import './styles.css'

const Product = ({product, compare}) =>
    <div key={product.id} className="col-sm-6 col-md-3">
        <div className={"product " + (product.compare ? "compare" : "")} >
            <img src={product.image} alt={product.name} />
            <div className="image_overlay"/>
            <div className="view_details" onClick={() => compare(product)}>
              {product.compare ? "Remove" : "Compare"}
            </div>
            <div className="stats">
                <div className="stats-container">
                    <span className="product_price">__("OldLabel1")</span>
                    <span className="product_name">
                        <CommunityTrans>
                            Testcase <b>8</b>: case with <strong>html tags</strong>. 
                        </CommunityTrans>
                    </span>
                    <p>
                        <CommunityTrans>
                            Testcase 3: Trans
                        </CommunityTrans>
                        </p>
                </div>
                <div>
                    <CommunityTrans>
                        Testcase 10: both <strong title={__("Testcase 10:Some random T in Trans")}>t() and trans</strong> together
                    </CommunityTrans>
                </div>
            </div>
        </div>
    </div>;

export default Product
