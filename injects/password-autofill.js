// 强制启用密码自动填充
document.querySelectorAll('input').forEach(input => {
  input.autocomplete = "on";
  input.removeAttribute('readonly');
});
