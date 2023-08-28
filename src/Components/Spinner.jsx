import React, { Component } from 'react'

const Spinner = () => {
    return (
        <div className="Spinner-center">
            <div className="spinner-border mb-4" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner
