import React, { useEffect, useState } from 'react'
import { useEventStore } from '../../stores/useEventStore'
import { FaTrash } from 'react-icons/fa'

const AdminEvents = () => {
    const { fetchAllEvents, createEvent, deleteEvent, events } = useEventStore()
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchAllEvents()
    }, [fetchAllEvents])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!file) return

        setLoading(true)

        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = async () => {
            const base64Image = reader.result
            const success = await createEvent({ image: base64Image })
            if (success) {
                setFile(null)
            }
            setLoading(false)
        }
    }

    return (
        <div className="w-full relative p-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-primary">
                Manage Events
            </h2>

            {/* Create Event Form */}
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center gap-3 mb-6"
            >
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="border border-gray-300 rounded p-2"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-primary cursor-pointer text-white px-4 py-2 rounded-lg hover:opacity-80 transition disabled:opacity-50"
                >
                    {loading ? "Creating..." : "Create Event"}
                </button>
            </form>

            {/* Events Table */}
            <div className="overflow-x-auto">
                <table className="w-full lg:w-3/4 mx-auto table-auto border">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th className="px-4 py-2">Event Image</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event) => (
                            <tr key={event._id} className="">
                                <td className="px-6 py-4 text-center">
                                    <img
                                        src={event.image}
                                        alt="event"
                                        className="h-16 w-24 object-cover rounded inline-block"
                                    />
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <button
                                        onClick={() => deleteEvent(event._id)}
                                        className="text-red-500"
                                    >
                                        <FaTrash size={24} className="hover:cursor-pointer" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminEvents
