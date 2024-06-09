import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import React, { useState } from "react";
import { Button, Container } from "@mui/joy";
import { CloseFullscreen } from "@mui/icons-material";
const Modal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
     const [isOpen, setIsOpen] = useState(false);
     return (
          <div>
               <Button
                    onClick={() => setIsOpen(true)}
                    className="text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity "
                    sx={{
                         backgroundColor: "#262626",
                         width: "100%",
                         borderRadius: "8px",
                         transition: "all 0.5s",
                         "&:hover": {
                              backgroundColor: "bg-indigo-700",
                         },
                         padding: 2,
                    }}
               >
                    View Work
               </Button>
               <div style={{ position: "absolute" }}></div>
               <SpringModal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    children={children}
               />
          </div>
     );
};

const SpringModal = ({ isOpen, setIsOpen, children }) => {
     return (
          <AnimatePresence>
               {isOpen && (
                    <motion.div
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         exit={{ opacity: 0 }}
                         style={{
                              zIndex: 9999,
                              display: "grid",
                              justifyContent: "center",
                              alignItems: "center",
                              alignContent: "center",
                         }}
                         onClick={() => setIsOpen(false)}
                         className="bg-slate-900/20 backdrop-blur fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                    >
                         <div
                              style={{
                                   color: "white",
                                   position: "absolute",
                                   top: 0,
                                   right: 0,
                                   margin: "1.5rem",
                                   padding: ".7rem",
                                   borderRadius: "50px",
                                   backgroundColor: "rgb(67 42 42 / 70%)",
                              }}
                         >
                              <CloseFullscreen />
                         </div>
                         <motion.div
                              initial={{ scale: 0, rotate: "9deg", opacity: 0 }}
                              animate={{ scale: 1, rotate: "0deg", opacity: 1 }}
                              exit={{ scale: 0, rotate: "-9deg", opacity: 0 }}
                              transition={{
                                   type: "spring",
                                   stiffness: 260,
                                   damping: 20,
                              }}
                              onClick={(e) => e.stopPropagation()}
                              style={{
                                   width: "100%",
                                   height: "100%",
                              }}
                              className=" text-white rounded-lg shadow-xl cursor-default relative overflow-hidden"
                         >
                              <Container maxWidth="xl">
                                   {/* <div className="z-10 p-10">
                                        <h3 className="text-3xl font-bold text-center mb-2">
                                             One more thing!
                                        </h3>
                                        <p className="text-center mb-6">
                                             Lorem ipsum dolor sit amet
                                             consectetur adipisicing elit. Id
                                             aperiam vitae, sapiente ducimus
                                             eveniet in velit.
                                        </p>
                                        <div className="flex gap-2">
                                             <button
                                                  onClick={() =>
                                                       setIsOpen(false)
                                                  }
                                                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                                             >
                                                  Nah, go back
                                             </button>
                                             <button
                                                  onClick={() =>
                                                       setIsOpen(false)
                                                  }
                                                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                                             >
                                                  Understood!
                                             </button>
                                        </div>
                                   </div> */}
                                   {children}
                              </Container>
                         </motion.div>
                    </motion.div>
               )}
          </AnimatePresence>
     );
};

export default Modal;
