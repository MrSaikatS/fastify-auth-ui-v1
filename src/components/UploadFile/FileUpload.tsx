"use client";

import { useState } from "react";
import { useFilePicker } from "use-file-picker";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import kyClient from "@/lib/ky/kyClient";

const FileUpload = () => {
  // for storing file state manually
  const [fileSelected, setFileSelected] = useState(false);

  // using useFilePicker for file selection
  const { openFilePicker, filesContent, plainFiles, clear } = useFilePicker({
    multiple: false,
    accept: "image/*",
    readAs: "DataURL",
    onFilesSuccessfullySelected: () => {
      setFileSelected(true);
    },
    onClear: () => {
      setFileSelected(false);
    },
  });

  // funtion to clear form and reset file state
  const clearFn = () => {
    clear();
  };

  const fileUploadFn = async () => {
    const formData = new FormData();

    formData.append("testFile", plainFiles[0]);

    const req = await kyClient
      .post("files/upload", {
        body: formData,
      })
      .json();

    console.log(req);

    clear();
  };

  return (
    <>
      <div className="">
        <Card>
          <CardContent className="flex min-w-[300px] flex-col items-center justify-center gap-4">
            {fileSelected ? (
              <></>
            ) : (
              <Button onClick={() => openFilePicker()}>Select image</Button>
            )}

            {filesContent.map((file, index) => {
              return (
                <div key={index}>
                  <img
                    alt={file.name}
                    src={file.content}
                    width={300}
                    className="rounded-xl"
                  />
                </div>
              );
            })}

            {fileSelected ? (
              <>
                <Button onClick={fileUploadFn}>Create Post</Button>

                <Button onClick={clearFn}>Cancel</Button>
              </>
            ) : (
              <></>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default FileUpload;
