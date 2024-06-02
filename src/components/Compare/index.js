import React from 'react'
import './styles.css'

const Compare = ({products}) =>
  <div className="row compare">
    <div className="col-12 mt-5 text-center">
      <table className="table">
        <thead className="thead-default">
          <tr>
            <th />
            {products.map(product =>
              <th key={product.id}>
                __communityT("OldLabel3")
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          <tr className="price">
            <th scope="row">__(`Testcase 5: with ${BACKTICKS} and ${variable}`)</th>
            {products.map(product =>
              <td key={product.id} className="text-center">{product.price}</td>
            )}
          </tr>
          <tr className="colors">
            <th scope="row">
              <CommunityTrans i18nKey="Testcase6">
                Testcase 6: Trans with i18nKey and {{variable}}
              </CommunityTrans>
            </th>
            {products.map(product =>
              <td key={product.id}>
                {product.colors.map((color, index) =>
                  <span key={index} className={"bg-" + color} />
                )}
              </td>
            )}
          </tr>
          <tr className="condition">
            <th scope="row">
              <CommunityTrans i18nKey="Testcase7" count={message.length}>
                  Testcase 7: with count. You have {{count : message.length}} message.
              </CommunityTrans>
            </th>
            {products.map(product =>
              <td key={product.id} className={product.condition === "Frozen" ? "bg-red" : "bg-green"}>
                <CommunityTrans>
                  OldLabel3
                </CommunityTrans>
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  </div>;

export default Compare
