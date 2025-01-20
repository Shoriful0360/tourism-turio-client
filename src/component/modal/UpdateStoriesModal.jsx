import {
    Dialog,
    Transition,
    TransitionChild,
    DialogPanel,
    DialogTitle,
  
  } from '@headlessui/react'
  import { Fragment, useState } from 'react'

  import toast from 'react-hot-toast'


const UpdateStoriesModal = ({isOpen,story,setIsOpen}) => {
    const{title,image,description}=story || {}
    return (
        <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={()=>isOpen(close)}>
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </TransitionChild>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <TransitionChild
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <DialogTitle
                  as='h3'
                  className='text-lg font-medium text-center leading-6 text-gray-900'
                >
                Update stories
                </DialogTitle>
                <div className='mt-2'>
             
                  <label className="form-control w-full ">
  <div className="label">
    <span className="label-text text-xl font-semibold">Title</span>

  </div>
  <textarea
  defaultValue={title}
  placeholder="Bio"
  className="textarea textarea-bordered  textarea-xs w-full  "></textarea>
</label>
                </div>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>Category: </p>
                </div>
                
             <div>
             <textarea defaultValue={description} className="textarea w-full textarea-bordered" placeholder="Bio"></textarea>
             </div>

              <div className='mt-3'>
             <button onClick={()=>setIsOpen(false)} className='btn'>update</button>
              </div>

              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
    );
};

export default UpdateStoriesModal;