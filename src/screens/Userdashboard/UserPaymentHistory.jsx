import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserDashboardLayout from '../../components/UserDashboardLayout/DashboardLayout';
import ReactPaginate from 'react-paginate';
import './index.css';

const paymentsData = [
  { date: '29 Aug, 2024 22:15', amount: '$49', method: 'By card', invoice: 'Payment' },
  // Add more payment data here
];

export const UserPaymentHistory = () => {
  const location = useLocation();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [payments, setPayments] = useState(paymentsData);

  const itemsPerPage = 5;

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    setCurrentPage(0);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    setCurrentPage(0);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handlePageClick = (data) => {
    let selected = data.selected;
    setCurrentPage(selected);
  };

  const clearFilters = () => {
    setStartDate('');
    setEndDate('');
    setCurrentPage(0);
  };

  const filterPayments = (payments, startDate, endDate) => {
    if (!startDate && !endDate) {
      return payments;
    }
    const start = startDate ? new Date(startDate) : new Date('1970-01-01');
    const end = endDate ? new Date(endDate) : new Date();
    return payments.filter(payment => {
      const paymentDate = new Date(payment.date);
      return paymentDate >= start && paymentDate <= end;
    });
  };

  const isInvalidDateRange = startDate && endDate && new Date(startDate) > new Date(endDate);

  const filteredPayments = filterPayments(payments, startDate, endDate);
  const paginatedPayments = filteredPayments.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
  const pageCount = Math.ceil(filteredPayments.length / itemsPerPage);

  return (
    <UserDashboardLayout>
      <div className="">
        <h2 className='User-Dashboard-title' id='PaymentHistoryText'>User Payment History</h2>
        <div className="main-card-Section pb-5">
          <div className="paymenthistory-Main d-flex justify-content-between">
            <p className='user-payment-no'>Payments: {filteredPayments.length}</p>

            <div className='d-flex'>
              <input
                type="date"
                className={`form-control ${isInvalidDateRange ? 'red' : ''}`}
                value={startDate}
                onChange={handleStartDateChange}
              />
              <input
                type="date"
                className={`form-control ${isInvalidDateRange ? 'red' : ''}`}
                value={endDate}
                onChange={handleEndDateChange}
              />
              <button className="btn btn-secondary" onClick={clearFilters}>Clear Filters</button>
            </div>
          </div>

          <div className="p-3 table-section-payment TableResponsive">
            <table className="table table-responsive">
              <thead className="table-light">
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Payment method</th>
                  <th scope="col">Invoice</th>
                </tr>
              </thead>
              <tbody>
                {paginatedPayments.map((payment, index) => (
                  <tr key={index}>
                    <td>{payment.date}</td>
                    <td>{payment.amount}</td>
                    <td>{payment.method}</td>
                    <td>{payment.invoice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="Pagination-section mt-3">
            <ReactPaginate
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={pageCount}
              previousLabel="< previous"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
        <div className='mt-5 pb-5 d-flex gap-4 user-action-button justify-content-end'>
          <button className='user-action-button1'>Back to Home</button>
        </div>
      </div>
    </UserDashboardLayout>
  );
};