import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900  text-xl">
      <div className="text-gray-200 flex gap-10 p-5 justify-center">
        <Link to="new-review">
          <p>Create new reivew</p>
        </Link>
        <Link to="/edit-review">
          <p>Edit an existing review</p>
        </Link>
        <Link to="/delete-review">
          <p>Delete reviews</p>
        </Link>
      </div>
      {/* <div className="text-gray-200 flex gap-10 p-5 justify-center">
        <p>Create new article</p>
        <p>Edit an existing article</p>
        <p>Delete article</p>
      </div>
      <div className="text-gray-200 flex gap-10 p-5 justify-center">
        <p>Add a new item to comparator</p>
        <p>Edit an item from comparator</p>
        <p>Delete item from comparator</p>
      </div> */}
      <Outlet />
    </div>
  );
};

export default AdminDashboard;
