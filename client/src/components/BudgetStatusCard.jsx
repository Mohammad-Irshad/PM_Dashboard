import React from 'react'

const BudgetStatusCard = ({ title, budget, profit, hours }) => {
    return (
        <div className="col-md-3">
            <div className="card p-3">
                <h5>{title}</h5>
                <p>Total Budget: {budget}€</p>
                <p>Profitability: {profit}€</p>
                <p>Actual Hours: {hours}</p>
            </div>
        </div>
    )
}

export default BudgetStatusCard
