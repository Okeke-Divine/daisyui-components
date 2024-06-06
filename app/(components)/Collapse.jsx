import React from 'react'

const Collapse = () => {
  return (
    <>
        <div>
            <h1>Collapse</h1>
            <div>

                <div className="collapse border border-base-200 collapse-arrow bg-base-200" tabIndex={0}>
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        Focus on mee to see contentx    
                    </div>
                    <div className="collapse-content">
                        <p>Test</p>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Collapse