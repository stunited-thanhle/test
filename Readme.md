# Part 01

1. UseState
   Sự khác biệt giữa setCount và () => setCount()
   - setCount là một hàm trong khi () => setCount() là một arrow function trả về hàm setCount. Nghĩa là, khi gọi `setCount`, nó sẽ thực hiện nội dung của hàm đó, trong khi khi gọi `() => setCount`, nó sẽ trả về hàm `setCount` mà không thực hiện nội dung của hàm đó ngay lập tức.
   - Lỗi `Too many re-renders` sảy ra mỗi khi component rerender thì hàm setCount sẽ được gọi để cập nhật count và lại bị rerender một lần nữa và cứ tiếp tục như vậy tạo thành vòng lặp vô tận.
2. UseEffect
   - Mounting
     Rendering
     run useEffect
   - Updating
     Rendering
     Run `useEffect() cleanup` nếu dependencies thay đổi.
     Run `useEffect()` nếu dependencies thay đổi.
   - UnMounting
     Run `useEffect() cleanup`
3. UseRef
   Giữ state trước đó với hook
   Các cách có thể sử dụng: - Dùng state: được nhưng trigger re-render - Dùng global variable: được nhưng không khuyến khích - Dùng local variable: không được vì bị reset mỗi lần re-render

Sử dụng useRef

4. UseMemo & UseCallback
