import React, {useCallback, useState} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Popup from "./components/modal";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @param cart
 * @returns {React.ReactElement}
 */
function App({store, cart }) {

  const [modalOpen, setModalOpen] = useState(false);

  const itemsList = store.getState().list;
  const cartList = cart.getState().list;

  const callbacks = {
    onDeleteItem: useCallback((item) => {
      cart.deleteItem(item.code);
    }, [cart]),

    onAddItem: useCallback((item) => {
      if (cart.findItem(item.title) !== -1) {
        cart.countItemsInCart(item.title)
      } else {
        cart.addItem(item);
      }
    }, [cart])
  }

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }


  return (
    <PageLayout>
      <Head title='Магазин' />
      <Controls
        list={cartList}
        onButtonClick={openModal}
        disabled={cartList.length === 0}
      />
      <List
        list={itemsList}
        callback={callbacks.onAddItem}
        buttonName='Добавить'
      />
      <Popup
        list={cartList}
        isOpen={modalOpen}
        onButtonClick={closeModal}
        callback={callbacks.onDeleteItem}
      />
    </PageLayout>
  );
}

export default App;
