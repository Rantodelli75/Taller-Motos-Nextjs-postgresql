import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps, getKeyValue} from "@nextui-org/react";
import {EditIcon} from "../components/EditIcon";
import {DeleteIcon} from "../components/DeleteIcon";
import {EyeIcon} from "../components/EyeIcon";
import {columns, users} from "../components/data";

type User = typeof users[0];

const Users = () => {
  
  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{radius: "md", src: user.avatar}}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);
    return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <h1 className="font-serif text-slate-600 text-xl font-bold mb-4 mt-8">CONTACTO</h1>
        <div className="bg-white shadow-xl rounded-lg p-3 items-center w-9/12 overflow-hidden mb-8">
            <div className="px-4 mb-5">
                <div className="flex justify-between">
                    <div className='w-full max-w-md'>
                        <div className='mb-4 mr-10'>
                        <p className='font-serif font-semibold text-white text-l p-2 pl-10 w-full m-4 mb-4 rounded-full bg-gray-600'>   NUESTRAS REDES</p>
                        </div>
                <form className='mb-12 ml-8'>
                <Table aria-label="Example table with custom cells">
                  <TableHeader columns={columns}>
                    {(column) => (
                    <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                      {column.name}
                    </TableColumn>
                    )}
                  </TableHeader>
                <TableBody items={users}>
                  {(item) => (
                    <TableRow key={item.id}>
                      {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                  )}
                </TableBody>
                </Table>
                </form>
                    </div>
            <div className='w-full max-w-md'>
                <div className='mb-4 mr-8'>
                <p className='font-serif font-semibold text-white text-l p-2 pl-10 w-full m-4 rounded-full bg-gray-600'>COMENTARIOS Y RECLAMOS</p>
                </div>
                <form className="mt-6 ml-10" action="#" method="POST">
                    <div className="mt-4">
                        <label htmlFor="title" className='text-gray-500 ml-3 mt-3 mb--3 text-sm'>TÍTULO</label>
                        <input type="text" id="title" name="title" className='mt-2 rounded-xl mb-3 p-3 w-9/12 text-slate-950 bg-gray-200 flex h-10 placeholder-slate-400 text-md'/>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="description" className='text-gray-500 ml-3 mt-3 mb--3 text-sm'>DESCRIPCIÓN</label>
                        <textarea id="description" name="description" rows={4} className='mt-2 rounded-xl mb-3 p-3 w-9/12 text-slate-950 bg-gray-200 flex h-18 placeholder-slate-400 text-md'></textarea>
                    </div>
                    </form>
                    <div className="flex justify-center mt-12">
                        <button type='submit' 
                        className='w-7/12 rounded-xl justify-center bg-amber-600 border border-amber-600 hover:border-amber-600 hover:bg-white hover:text-amber-600 font-semibold h-12 text-white relative p-1 px-8'>
                        Enviar
                        </button>
                        </div>
            </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default Users;