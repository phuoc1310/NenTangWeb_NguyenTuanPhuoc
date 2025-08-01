$(document).ready(function () {
  $("#addTransactionForm").validate({
    rules: {
      customerName: {
        required: true,
        maxlength: 30
      },
      employeeName: {
        required: true,
        maxlength: 30
      },
      amount: {
        required: true
      },
      purchaseDate: {
        required: true
      }
    },
    messages: {
      customerName: {
        required: "Vui lòng nhập tên khách hàng",
        maxlength: "Tên khách hàng không được vượt quá 30 ký tự"
      },
      employeeName: {
        required: "Vui lòng nhập tên nhân viên",
        maxlength: "Tên nhân viên không được vượt quá 30 ký tự"
      },
      amount: {
        required: "Vui lòng nhập số tiền"
      },
      purchaseDate: {
        required: "Vui lòng chọn ngày mua"
      }
    },
    errorClass: "text-danger",
    errorElement: "div"
  });
});
