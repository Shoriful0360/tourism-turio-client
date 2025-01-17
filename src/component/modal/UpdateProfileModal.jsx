import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import useAuth from '../../hook/useAuth';
import { imageUpload } from '../../utilites/ImageUpload';


const UpdateProfileModal = ({ isOpen, setIsOpen }) => {

const {user,profileUpdate,setLoading}=useAuth()

const handleUpdateProfile=async(e)=>{
  e.preventDefault()
  const form=e.target;
  const name=form.name.value;
  const image=form.img.files[0]
  const imageFile={image}
  const imgUpload=await imageUpload(imageFile)
  if(imgUpload){
    profileUpdate(name,imgUpload)
    setLoading(false)
  }
  
}

  return (
    <div>


      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10  overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-xs rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 text-center font-medium text-white">
                Update Profile
              </DialogTitle>
              {/* form */}
              <form onSubmit={handleUpdateProfile}>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Name :</span>

                  </div>
                  <input type="text" defaultValue={user?.displayName} name='name' placeholder="Type here" className="input input-bordered w-full " />

                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Choose your Image :</span>

                  </div>
                  <input type="file" name='img' className="file-input file-input-bordered w-full max-w-xs" />

                </label>

                {/* button */}
                <div className="mt-4 flex justify-between">
                <Button
                type='submit'
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  yes
                </Button>
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  No
                </Button>
              </div>
              </form>
          
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default UpdateProfileModal;

