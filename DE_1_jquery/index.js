$(document).ready(function () {
  // Thêm phương thức kiểm tra số điện thoại Việt Nam
  $.validator.addMethod("phoneVN", function (value, element) {
    return this.optional(element) || /^0\d{9}$/.test(value);
  }, "Số điện thoại phải bắt đầu bằng số 0 và đủ 10 số");

  $("#addEmployeeForm").validate({
    rules: {
      name: {
        required: true,
        maxlength: 30
      },
      email: {
        required: true,
        email: true
      },
      address: {
        required: true
      },
      phone: {
        required: true,
        digits: true,
        minlength: 10,
        maxlength: 10,
        phoneVN: true 
      }
    },
    messages: {
      name: {
        required: "Vui lòng nhập họ tên",
        maxlength: "Họ tên không được vượt quá 30 ký tự"
      },
      email: {
        required: "Vui lòng nhập email",
        email: "Email không đúng định dạng"
      },
      address: {
        required: "Vui lòng nhập địa chỉ"
      },
      phone: {
        required: "Vui lòng nhập số điện thoại",
        digits: "Chỉ được nhập số",
        minlength: "Số điện thoại phải đủ 10 số",
        maxlength: "Số điện thoại phải đủ 10 số",
        phoneVN: "Số điện thoại phải bắt đầu bằng số 0"
      }
    },
    errorClass: "text-danger",
    errorElement: "div"
  });
});
