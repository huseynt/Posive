import { useState } from "react";
import style from "./permissionItemchange.module.scss";
import { createEditUserPermissions } from "../../../../utils/API/API";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Loader from "../../../common/Loader/Loader";
import { IUpdateUserPermissions } from "../../../../utils/API/types";
import { useTranslation } from "react-i18next";

interface IPermissionItemChangeProps {
  setViewOpen: React.Dispatch<React.SetStateAction<string>>;
  username: string;
  email: string;
  created: string;
  role: string;
  requestNotify: (purpose: string, description: string | undefined) => void;
}

const PermissionItemChange: React.FC<IPermissionItemChangeProps> = (props) => {
  const { setViewOpen, username, email, created, role, requestNotify } = props;
  const [data, setData] = useState<IUpdateUserPermissions>({
    username: username,
    email: email,
    created: created,
    role: role,
  });
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // ----------------- save product -----------------
  const queryClient = useQueryClient();
  const { mutate: EditUserPermissions, isPending: isEditUser } = useMutation({
    mutationFn: createEditUserPermissions,
    onSuccess: (res) => {
      if (res === "Success") {
        queryClient.invalidateQueries({ queryKey: ["getPermission"] });
        setViewOpen("");
        requestNotify("done", t("Saved successfully"));
      } else {
        requestNotify("undone", t("Save failed"));
      }
    },
    onError: (error) => {
      console.log(error);
      requestNotify("undone", t("Save failed"));
    },
  });

  const saveOrder = () => {
    if (
      data.username !== "" ||
      data.email !== "" ||
      data.created !== "" ||
      data.role !== ""
    ) {
      EditUserPermissions(data);
    }
  };
  // ----------------- save product -----------------

  return (
    <div className={style.view}>
      <div className={style.view_bg} onClick={() => setViewOpen("")}></div>

      <div className={style.view_block}>
        <div className={style.view_block_head}>
          <h3>{t("Edit User Permission")}</h3>
          <div
            className={style.view_block_head_exit}
            onClick={() => setViewOpen("")}
          >
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.750488 1.25L11.2498 11.7493"
                stroke="#1A1C1E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M0.750218 11.7493L11.2495 1.25"
                stroke="#1A1C1E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className={style.view_block_main}>
          <div className={style.view_block_main_information}>
            <div className={style.view_block_main_information_item}>
              <div className={style.view_block_main_information_item_head}>
                {t("Full Name")}
              </div>
              <div className={style.view_block_main_information_item_value}>
                <input
                  type="text"
                  name="username"
                  value={data.username}
                  style={{ outline: "none", border: "none" }}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={style.view_block_main_information_item}>
              <div className={style.view_block_main_information_item_head}>
                {t("Email")}
              </div>
              <div
                className={`${style.view_block_main_information_item_value} ${style.view_block_main_information_item_value_unique}`}
                title={data.email}
              >
                {data.email}
              </div>
            </div>

            <div className={style.view_block_main_information_item}>
              <div className={style.view_block_main_information_item_head}>
                {t("Created")}
              </div>
              <div
                className={`${style.view_block_main_information_item_value} ${style.view_block_main_information_item_value_unique}`}
              >
                {new Date(data.created).toLocaleDateString() +
                  " " +
                  new Date(data.created).toLocaleTimeString()}
              </div>
            </div>

            <div className={style.view_block_main_information_item}>
              <div className={style.view_block_main_information_item_head}>
                {t("Role")}
              </div>
              <div
                className={`${style.view_block_main_information_item_value} ${style.view_block_main_information_item_value_payment}`}
              >
                <div
                  className={`${style.view_block_main_information_item_value_payment_head}`}
                >
                  {data.role === "SUPER_ADMIN"
                    ? t("SUPER ADMIN")
                    : data.role === "ADMIN"
                    ? t("ADMIN")
                    : t("MEMBER")}
                  <svg
                    width="14"
                    height="7"
                    viewBox="0 0 14 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.28 0.966797L7.9333 5.31346C7.41997 5.8268 6.57997 5.8268 6.06664 5.31346L1.71997 0.966797"
                      stroke="#1A1C1E"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div
                  className={`${style.view_block_main_information_item_value_payment_down}`}
                >
                  <div
                    style={{
                      backgroundColor:
                        data.role === "SUPER_ADMIN" ? "#edf1d3" : "",
                      color: data.role === "SUPER_ADMIN" ? "black" : "",
                    }}
                    onClick={() => setData({ ...data, role: "SUPER_ADMIN" })}
                  >
                    {t("SUPER ADMIN")}
                  </div>
                  <div
                    style={{
                      backgroundColor: data.role === "ADMIN" ? "#edf1d3" : "",
                      color: data.role === "ADMIN" ? "black" : "",
                    }}
                    onClick={() => setData({ ...data, role: "ADMIN" })}
                  >
                    {t("ADMIN")}
                  </div>
                  <div
                    style={{
                      backgroundColor: data.role === "MEMBER" ? "#edf1d3" : "",
                      color: data.role === "MEMBER" ? "black" : "",
                    }}
                    onClick={() => setData({ ...data, role: "MEMBER" })}
                  >
                    {t("MEMBER")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.view_block_actions}>
          <div
            className={`${style.view_block_actions_option} ${style.view_block_actions_print}`}
            onClick={saveOrder}
          >
            {isEditUser ? <Loader /> : <span>{t("Update")}</span>}
          </div>

          <div
            className={style.view_block_actions_option}
            style={{ width: "100px" }}
            onClick={() => setViewOpen("")}
          >
            <span>{t("cancel")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermissionItemChange;
