import React from 'react';
import PropTypes from "prop-types";
import './style.css';
import List from "../list";

function Popup({ list, isOpen, onButtonClick, callback }) {

  return (
    <div className={`Modal ${isOpen ? ('Modal_open') : ''}`} >
      <div className='Modal-container'>
        <div className="Modal_header">
          <span className="Modal_title">Корзина</span>
          <button onClick={onButtonClick}>
            Закрыть
          </button>
        </div>
        <div className='Modal-body'>
          <div className='Modal-body_list'>
            <List
              list={list}
              callback={callback}
              buttonName='Удалить'
            />
          </div>
          <div className='Modal-result'>
            <div>Итого: </div>
            <div>{list.reduce((acc, elem) => { return acc + elem.count * elem.price }, 0)+" ₽"}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

Popup.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
  })).isRequired,
  callback: PropTypes.func.isRequired,
};

Popup.defaultProps = {
  callback: () => {
  }
}

export default React.memo(Popup);