import { create } from "zustand";
import { toast } from "react-hot-toast";
import axios from "../lib/axios";

export const useEventStore = create((set) => ({
    events: [],
    loading: false,

    // Fetch all events
    fetchAllEvents: async () => {
        set({ loading: true });
        try {
            const res = await axios.get("/events");
            set({ events: res.data, loading: false });
        } catch (error) {
            set({ loading: false });
            toast.error(error.response?.data?.error || "Failed to fetch events");
        }
    },

    // Create event
    createEvent: async (eventData) => {
        set({ loading: true });
        try {
            const res = await axios.post("/events", eventData);
            set((state) => ({
                events: [...state.events, res.data],
                loading: false,
            }));
            toast.success("Event created successfully");
        } catch (error) {
            set({ loading: false });
            toast.error(error.response?.data?.error || "Failed to create event");
        }
    },

    // Delete event
    deleteEvent: async (eventId) => {
        set({ loading: true });
        try {
            await axios.delete(`/events/${eventId}`);
            set((state) => ({
                events: state.events.filter((event) => event._id !== eventId),
                loading: false,
            }));
            toast.success("Event deleted successfully");
        } catch (error) {
            set({ loading: false });
            toast.error(error.response?.data?.error || "Failed to delete event");
        }
    },
}));
