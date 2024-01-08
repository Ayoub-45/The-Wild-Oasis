import React from "react";
import { useState } from "react";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CabinTable from "./CabinTable";
import CreateCabinForm from "./CreateCabinForm";
export default function AddCabin() {
  const [isOpenModel, setIsOOpenModel] = useState(false);
  return (
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
  );
}
