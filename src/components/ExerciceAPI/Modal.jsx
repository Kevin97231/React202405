/* eslint-disable react/prop-types */
export const Modal = ({content}) => {
    return (
      <dialog id="my_modal" className="modal">
      <div className="modal-box w-full">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        {content}
      </div>
    </dialog>
    );
  }