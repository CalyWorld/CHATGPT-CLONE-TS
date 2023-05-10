import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { FolderCollectionContext } from "./context/folderCollectionContext"
export const SideNavBar = () => {

    const { folder } = useContext(FolderCollectionContext);
    return (
        <div className="w-96 flex flex-col text-textColor">
            <div className="new-chat-container bg-navBackgroundColor">
                <Link to="/">
                    <div className="button-container flex flex-col justify-center p-5">
                        <button className="text-textColor">+ New Chat</button>
                    </div>
                </Link>
            </div>
            <div className="saved-chat-container">
                {folder.map((collections) => 
                    <div key={collections.id} className="flex flex-cols justify-center gap-4">
                      <Link to={`/${collections.message}/`}>{collections.message}</Link>
                    </div>
                )}
            </div>
        </div>
    )
}
