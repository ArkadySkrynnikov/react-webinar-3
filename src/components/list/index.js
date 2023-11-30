import React from "react";
import PropTypes, { string } from 'prop-types';
import Item from "../item";
import "style.css"

function List({ list, callback, buttonName }) {
  return (
    <div className='List'>{
      list.map(item =>
        <div key={item.code} className='List-item'>
          <Item
            item={item}
            callback={callback}
            buttonName={buttonName}
          />
        </div>
      )}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
  })).isRequired,
  callback: PropTypes.func.isRequired,
  buttonName: string
};

List.defaultProps = {
  callback: () => {
  },
}

export default React.memo(List);