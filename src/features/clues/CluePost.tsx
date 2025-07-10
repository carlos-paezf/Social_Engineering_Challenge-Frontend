import { motion } from "framer-motion";
import { useEffect, type FC } from "react";
import { useCluesStore } from "../../store/useCluesStore";
import type { Hint } from "../../types/PostHint";
import { formatPostDate } from "../../utils/formatTime";


interface Props extends Hint {
    idx: number;
}


export const CluePost: FC<Props> = ( { idx, id, imageUrl, postDate, description, comments, likes, profileName, profileAvatar } ) => {
    const formattedDate = formatPostDate( postDate );
    const viewHint = useCluesStore( ( state ) => state.viewHint );

    useEffect( () => {
        viewHint( id );
    }, [ id, viewHint ] );

    return (
        <motion.div key={ id }
            initial={ { opacity: 0, y: 40 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.5, ease: "easeOut", delay: idx * 0.01 } }
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
        >
            <div className="flex items-center gap-3 p-4">
                <img src={ ( profileAvatar === "" || !profileAvatar || typeof ( profileAvatar ) === "undefined" ) ? "src/assets/default-avatar.png" : profileAvatar } alt="Avatar" className="w-10 h-10 rounded-full object-cover" />

                <div className="">
                    <p className="font-semibold text-gray-800">{ profileName || "Victima" }</p>
                    <p className="text-sx text-gray-500">{ formattedDate }</p>
                </div>
            </div>

            <img src={ imageUrl } alt="Pista Visual" className="w-full h-100 object-cover" />

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
        </motion.div>
    );
};
