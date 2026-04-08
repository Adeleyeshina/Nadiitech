import React from 'react';
import { MdClose, MdPersonOutline, MdPhoneIphone, MdMailOutline, MdHomeRepairService, MdCalendarMonth, MdOutlineAccessTime, MdOutlineNotes } from 'react-icons/md';

const BookingModal = ({ booking, onClose }) => {
  if (!booking) return null;

  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm'>
      <div className='bg-white w-full max-w-lg rounded-2xl shadow-2xl relative animate-in fade-in zoom-in duration-300 overflow-hidden'>
        <div className='bg-primary/5 p-6 border-b border-primary/10 flex justify-between items-center'>
          <div>
            <h3 className='text-xl font-black text-gray-900'>Booking Details</h3>
            <p className='text-xs text-primary font-bold uppercase tracking-widest mt-1'>Service Request Info</p>
          </div>
          <button 
            onClick={onClose}
            className='p-2 hover:bg-white rounded-full text-gray-400 hover:text-gray-900 transition-all shadow-sm'
          >
            <MdClose size={24} />
          </button>
        </div>

        <div className='p-8 space-y-6 max-h-[70vh] overflow-y-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Customer Info */}
            <div className='space-y-1'>
              <p className='text-[10px] font-black text-gray-400 uppercase tracking-widest'>Customer Name</p>
              <div className='flex items-center gap-2 text-gray-900 font-bold'>
                <MdPersonOutline className='text-primary' size={18} />
                <span>{booking.name}</span>
              </div>
            </div>

            <div className='space-y-1'>
              <p className='text-[10px] font-black text-gray-400 uppercase tracking-widest'>Phone Number</p>
              <div className='flex items-center gap-2 text-gray-900 font-bold'>
                <MdPhoneIphone className='text-primary' size={18} />
                <span>{booking.phone}</span>
              </div>
            </div>

            <div className='md:col-span-2 space-y-1'>
              <p className='text-[10px] font-black text-gray-400 uppercase tracking-widest'>Email Address</p>
              <div className='flex items-center gap-2 text-gray-900 font-bold'>
                <MdMailOutline className='text-primary' size={18} />
                <span className='break-all'>{booking.email || 'N/A'}</span>
              </div>
            </div>

            {/* Service Details */}
            <div className='md:col-span-2 p-4 bg-gray-50 rounded-xl space-y-1 border border-gray-100'>
              <p className='text-[10px] font-black text-gray-400 uppercase tracking-widest'>Requested Service</p>
              <div className='flex items-center gap-2 text-primary font-black text-lg'>
                <MdHomeRepairService size={20} />
                <span>{booking.service === "Other" ? booking.otherService : booking.service}</span>
              </div>
            </div>

            <div className='space-y-1'>
              <p className='text-[10px] font-black text-gray-400 uppercase tracking-widest'>Scheduled Date</p>
              <div className='flex items-center gap-2 text-gray-900 font-bold'>
                <MdCalendarMonth className='text-primary' size={18} />
                <span>{booking.date}</span>
              </div>
            </div>

            <div className='space-y-1'>
              <p className='text-[10px] font-black text-gray-400 uppercase tracking-widest'>Scheduled Time</p>
              <div className='flex items-center gap-2 text-gray-900 font-bold'>
                <MdOutlineAccessTime className='text-primary' size={18} />
                <span>{booking.time}</span>
              </div>
            </div>

            <div className='md:col-span-2 space-y-1'>
              <p className='text-[10px] font-black text-gray-400 uppercase tracking-widest'>Customer Notes</p>
              <div className='flex items-start gap-2 text-gray-600 bg-gray-50/50 p-4 rounded-xl border border-gray-50 italic text-sm'>
                <MdOutlineNotes className='text-gray-300 mt-1' size={20} />
                <p className='leading-relaxed'>{booking.note || "No extra notes provided by customer."}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='p-6 bg-gray-50 border-t border-gray-100 flex justify-end'>
          <button 
            onClick={onClose}
            className='px-8 py-3 bg-white border border-gray-200 text-gray-600 font-bold rounded-xl hover:bg-gray-100 transition-all text-sm'
          >
            Close Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
