import React from "react";
import PropTypes, { bool } from 'prop-types';
import './style.css';
import {plural} from "../../utils";

function Controls({ onClick, list, disabled }) {
  return (
    <div className='Controls'>
      <div className='Controls_container'>
        <span className='Controls-title'>В корзине:</span>
        {list.length
          ?
          <span className='Controls-span'>
            {
              list.length
              +
              `${plural(list.length, {
                one: 'товар',
                few: 'товара',
                many: 'товаров'
              })}  /`
              +
              list.reduce((sum, item) => {
              return sum + item.count * item.price}, 0)
              +
              " ₽"
            }
          </span>
          :
          <span className='Controls-span'>{" пусто"}</span>
        }
        <button
          className='Controls-button'
          disabled={disabled}
          onClick={() => onClick()}
        >
          Перейти
        </button>
      </div>
    </div>
  )
}

Controls.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: bool
};

Controls.defaultProps = {
  onButtonClick: () => { }
}

export default React.memo(Controls);
