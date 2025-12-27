"use client";
import { useState } from "react";
import Modal from "../common/Modal";

export default function ClientTest() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="rounded bg-blue-600 px-4 py-2 text-white"
            >
                Open Modal
            </button>

            <Modal isOpen={open} onClose={() => setOpen(false)}>
                <p>testing</p>
            </Modal>
        </>
    );
}
