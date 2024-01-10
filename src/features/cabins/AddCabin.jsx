import React from "react";
import { useState } from "react";
import Button from "../../ui/Button";
import CabinTable from "./CabinTable";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
export default function AddCabin() {
  /*return (
    <div>
      <CabinTable />
      <Button onClick={() => setIsOOpenModel((show) => !show)}>
        Add new Cabin
      </Button>
      {isOpenModel && (
        <Modal onClose={() => setIsOOpenModel(false)}>
          <CreateCabinForm onCloseModal={() => setIsOOpenModel(false)} />
        </Modal>
      )}
    </div>
  );*/
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );

  /*
      <Modal>
          <Modal.Open>
          <Button>Show Table</Button>
          </Modal.Open>
          <Modal.Window>
          <CreateCabinForm />
          </Modal.Window>
          </Modal>
          l.Window>
          </Modal>
          );
        */
}
