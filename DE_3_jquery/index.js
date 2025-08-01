$(document).ready(function () {
  // Thêm thuộc tính name cho các input (cần thiết cho jQuery Validate)
  $('#firstName').attr('name', 'firstName');
  $('#lastName').attr('name', 'lastName');
  $('#address').attr('name', 'address');

  // Khởi tạo jQuery Validate
  $('#addTransactionForm').validate({
    rules: {
      firstName: {
        required: true,
        maxlength: 15
      },
      lastName: {
        required: true,
        maxlength: 20
      },
      address: {
        required: true,
        maxlength: 50
      }
    },
    messages: {
      firstName: {
        required: "Vui lòng nhập tên.",
        maxlength: "Tên không được vượt quá 15 ký tự."
      },
      lastName: {
        required: "Vui lòng nhập họ đệm.",
        maxlength: "Họ đệm không được vượt quá 20 ký tự."
      },
      address: {
        required: "Vui lòng nhập địa chỉ.",
        maxlength: "Địa chỉ không được vượt quá 50 ký tự."
      }
    },
  });
});
