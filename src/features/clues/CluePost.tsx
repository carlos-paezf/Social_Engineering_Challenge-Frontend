import type { FC } from "react";
import type { Hint } from "../../types/PostHint";
import { formatPostDate } from "../../utils/formatTime";


export const CluePost: FC<Hint> = ( { id, imageUrl, postDate, description, comments, likes, profileName, profileAvatar } ) => {
    const formattedDate = formatPostDate( postDate );

    return (
        <div key={ id } className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 my-5">
            <div className="flex items-center gap-3 p-4">
                <img src={ profileAvatar || "/assets/default-avatar.png" } alt="Avatar" className="w-10 h-10 rounded-full object-cover" />

                <div className="">
                    <p className="font-semibold text-gray-800">{ profileName || "Victima" }</p>
                    <p className="text-sx text-gray-500">{ formattedDate }</p>
                </div>
            </div>

            <img src={ imageUrl } alt="Pista Visual" className="w-full h-48 object-cover" />

            <div className="p-4">
                <p className="text-base text-gray-800 mb-2">{ description }</p>

                <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                    <span>👍{ likes }</span>
                    <span>💖 { Math.floor( likes / 2 ) }</span>
                    <span>💬 { comments.length } comentarios</span>
                </div>

                <div className="text-xs text-gray-600 mt-3">
                    {
                        comments.map( ( comment, idx ) => (
                            <p key={ idx } className="mt-1">
                                <span className="font-semibold">Amigo { idx + 1 }:</span> { comment }
                            </p>
                        ) )
                    }
                </div>
            </div>
        </div>
    );
};
