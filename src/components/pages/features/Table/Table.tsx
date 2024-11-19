import { useDispatch, useSelector } from "react-redux";
import style from "./table.module.scss";
import { IOrderState } from "../../../redux/type";
import { changeTable, resetTable } from "../../../redux/slice/mealSlice";
import { createGetTables } from "../../../utils/API/API";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";


interface IgetTables {
  number: string;
  access: string;
}

interface ITable {
  setTable: React.Dispatch<React.SetStateAction<boolean>>;
}

const Table: React.FC<ITable> = (props) => {
  const { setTable } = props;
  const { t } = useTranslation();
  // -------------------- redux --------------------------
  const dispatch = useDispatch();
  const { tables } = useSelector((state: {order: IOrderState}) => state.order);
  // ------------------------------------------------------



  // --------------------- get tables ----------------------------
  const {
    data: getTables,
    // isLoading: isGetTablesLoading,
  } = useQuery<IgetTables[]>({
    queryKey: ["getTables"],
    queryFn: createGetTables,
  });
  // --------------------- get tables ----------------------------



  return (
    <div className={style.table}>
      <div className={style.table_bg}
      onClick={() => 
        {
          setTable(false)
          dispatch(resetTable())
        }
      }
      ></div>

      <div className={style.table_block}>


        {/* --------------- head ------------------- */}
        <div className={style.table_block_head}>
          <h3 className={style.table_block_head_title}>{t("Choose Table")}</h3>

          <div className={style.table_block_head_list}>
            <div className={style.table_block_head_list_item}>
              <div className={style.table_block_head_list_item_circle}
              style={{backgroundColor: "#12B3A8"}}
              ></div>
              <p className={style.table_block_head_list_item_title}>{t("Available")}</p>
            </div>

            <div className={style.table_block_head_list_item}>
              <div className={style.table_block_head_list_item_circle}
              style={{backgroundColor: "#EA7E41"}}
              ></div>
              <p className={style.table_block_head_list_item_title}>{t("Available Soon")}</p>
            </div>

            <div className={style.table_block_head_list_item}>
              <div className={style.table_block_head_list_item_circle} 
              style={{backgroundColor: "#4D81E7"}}
              ></div>
              <p className={style.table_block_head_list_item_title}>{t("Filled")}</p>
            </div>

            {/* <div className={style.table_block_head_list_item}>
              <div className={style.table_block_head_list_item_circle}
              style={{backgroundColor: "#C65468"}}
              ></div>
              <p className={style.table_block_head_list_item_title}>Reserved</p>
            </div> */}
          </div>

          {/* <div className={style.table_block_head_search}>
            <input className={style.table_block_head_search_input} type="text" placeholder="Search" />
            <svg className={style.table_block_head_search_svg} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.66659 14.0002C11.1644 14.0002 13.9999 11.1646 13.9999 7.66683C13.9999 4.16903 11.1644 1.3335 7.66659 1.3335C4.16878 1.3335 1.33325 4.16903 1.33325 7.66683C1.33325 11.1646 4.16878 14.0002 7.66659 14.0002Z" stroke="#1A1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.6666 14.6668L13.3333 13.3335" stroke="#1A1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div> */}
          
        </div>

        {/* --------------- place ------------------- */}
        <div className={style.table_block_place}>

          {/* -------------------------first row-------------------------  */} 
          <div className={style.table_block_place_firstrow}>

            <div className={
              `${style.table_block_place_firstrow_fourperson} 
              ${tables.some((table) => table == "T01") ? style.selected : ""}`}
            id="T01"
            onClick={() => 
              getTables && getTables.some((table) => table.number == "T01" && table.access == "AVALIABLE") ?
              dispatch(changeTable("T01")) : ""
            }
            >
              <div className={style.table_block_place_firstrow_fourperson_seat}>
                <div></div>
                <div></div>
              </div>
              <div className={style.table_block_place_firstrow_fourperson_table}>
                <span style={{backgroundColor: 
                  getTables && getTables.some((table) => table.number == "T01" && table.access == "REZERV") ? "#4D81E7" : 
                  getTables && getTables.some((table) => table.number == "T01" && table.access == "SOON") ? "#EA7E41" : 
                  "#12B3A8"
                }}>
                </span>T01</div>
              <div className={style.table_block_place_firstrow_fourperson_seat}>
                <div></div>
                <div></div>
              </div>
            </div>

            <div className={
              `${style.table_block_place_firstrow_fourperson} 
              ${tables.some((table) => table == "T02") ? style.selected : ""}`}
            id="T02"
            onClick={() => 
              getTables && getTables.some((table) => table.number == "T02" && table.access == "AVALIABLE") ?
              dispatch(changeTable("T02")) : ""
            }
            >
              <div className={style.table_block_place_firstrow_fourperson_seat}>
                <div></div>
                <div></div>
              </div>
              <div className={style.table_block_place_firstrow_fourperson_table}>
                <span style={{backgroundColor: 
                  getTables && getTables.some((table) => table.number == "T02" && table.access == "REZERV") ? "#4D81E7" : 
                  getTables && getTables.some((table) => table.number == "T02" && table.access == "SOON") ? "#EA7E41" : 
                  "#12B3A8"
                }}>
                  </span>T02</div>
              <div className={style.table_block_place_firstrow_fourperson_seat}>
                <div></div>
                <div></div>
              </div>
            </div>

            <div className={
              `${style.table_block_place_firstrow_fourperson} 
              ${tables.some((table) => table == "T03") ? style.selected : ""}`}
            id="T03"
            onClick={() => 
              getTables && getTables.some((table) => table.number == "T03" && table.access == "AVALIABLE") ?
              dispatch(changeTable("T03")) : ""
            }
            >
              <div className={style.table_block_place_firstrow_fourperson_seat}>
                <div></div>
                <div></div>
              </div>
              <div className={style.table_block_place_firstrow_fourperson_table}>
                <span style={{backgroundColor: 
                  getTables && getTables.some((table) => table.number == "T03" && table.access == "REZERV") ? "#4D81E7" : 
                  getTables && getTables.some((table) => table.number == "T03" && table.access == "SOON") ? "#EA7E41" : 
                  "#12B3A8"
                }}>
                  </span>T03</div>
              <div className={style.table_block_place_firstrow_fourperson_seat}>
                <div></div>
                <div></div>
              </div>
            </div>

            <div className={
              `${style.table_block_place_firstrow_fourperson} 
              ${tables.some((table) => table == "T04") ? style.selected : ""}`}
            id="T04"
            onClick={() => 
              getTables && getTables.some((table) => table.number == "T04" && table.access == "AVALIABLE") ?
              dispatch(changeTable("T04")) : ""
            }
            >
              <div className={style.table_block_place_firstrow_fourperson_seat}>
                <div></div>
                <div></div>
              </div>
              <div className={style.table_block_place_firstrow_fourperson_table}>
                <span style={{backgroundColor: 
                  getTables && getTables.some((table) => table.number == "T04" && table.access == "REZERV") ? "#4D81E7" : 
                  getTables && getTables.some((table) => table.number == "T04" && table.access == "SOON") ? "#EA7E41" : 
                  "#12B3A8"
                }}>
                  </span>T04</div>
              <div className={style.table_block_place_firstrow_fourperson_seat}>
                <div></div>
                <div></div>
              </div>
            </div>

            <div className={
              `${style.table_block_place_firstrow_fourperson} 
              ${tables.some((table) => table == "T05") ? style.selected : ""}`}
            id="T05"
            onClick={() => 
              getTables && getTables.some((table) => table.number == "T05" && table.access == "AVALIABLE") ?
              dispatch(changeTable("T05")) : ""
            }
            >
              <div className={style.table_block_place_firstrow_fourperson_seat}>
                <div></div>
                <div></div>
              </div>
              <div className={style.table_block_place_firstrow_fourperson_table}>
                <span style={{backgroundColor: 
                  getTables && getTables.some((table) => table.number == "T05" && table.access == "REZERV") ? "#4D81E7" : 
                  getTables && getTables.some((table) => table.number == "T05" && table.access == "SOON") ? "#EA7E41" : 
                  "#12B3A8"
                }}>
                  </span>T05</div>
              <div className={style.table_block_place_firstrow_fourperson_seat}>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>


          {/* -------------------------second row-------------------------  */}
          
          <div className={style.table_block_place_secondrow}>
            <div className={
              `${style.table_block_place_secondrow_fourperson} 
              ${tables.some((table) => table == "T06") ? style.selected : ""}`}
            id="T06"
            onClick={() => 
              getTables && getTables.some((table) => table.number == "T06" && table.access == "AVALIABLE") ?
              dispatch(changeTable("T06")) : ""
            }
            >
              <div className={style.table_block_place_secondrow_fourperson_seat}>
                <div></div>
                <div></div>
              </div>
              <div className={style.table_block_place_secondrow_fourperson_table}>
                <span style={{backgroundColor: 
                  getTables && getTables.some((table) => table.number == "T06" && table.access == "REZERV") ? "#4D81E7" : 
                  getTables && getTables.some((table) => table.number == "T06" && table.access == "SOON") ? "#EA7E41" : 
                  "#12B3A8"
                }}>
                  </span>T06</div>
              <div className={style.table_block_place_secondrow_fourperson_seat}>
                <div></div>
                <div></div>
              </div>
            </div>

            <div className={
              `${style.table_block_place_secondrow_fourperson} 
              ${tables.some((table) => table == "T07") ? style.selected : ""}`}
            id="T07"
            onClick={() => 
              getTables && getTables.some((table) => table.number == "T07" && table.access == "AVALIABLE") ?
              dispatch(changeTable("T07")) : ""
            }
            >
              <div className={style.table_block_place_secondrow_fourperson_seat}>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className={style.table_block_place_secondrow_fourperson_table}>
                <span style={{backgroundColor: 
                  getTables && getTables.some((table) => table.number == "T07" && table.access == "REZERV") ? "#4D81E7" : 
                  getTables && getTables.some((table) => table.number == "T07" && table.access == "SOON") ? "#EA7E41" : 
                  "#12B3A8"
                }}>
                  </span>T07</div>
              <div className={style.table_block_place_secondrow_fourperson_seat}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            <div className={
              `${style.table_block_place_secondrow_fourperson} 
              ${tables.some((table) => table == "T08") ? style.selected : ""}`}
            id="T08"
            onClick={() => 
              getTables && getTables.some((table) => table.number == "T08" && table.access == "AVALIABLE") ?
              dispatch(changeTable("T08")) : ""
            }
            >
              <div className={style.table_block_place_secondrow_fourperson_seat}>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className={style.table_block_place_secondrow_fourperson_table}>
                <span style={{backgroundColor: 
                  getTables && getTables.some((table) => table.number == "T08" && table.access == "REZERV") ? "#4D81E7" : 
                  getTables && getTables.some((table) => table.number == "T08" && table.access == "SOON") ? "#EA7E41" : 
                  "#12B3A8"
                }}>
                  </span>T08</div>
              <div className={style.table_block_place_secondrow_fourperson_seat}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            <div className={
              `${style.table_block_place_secondrow_fourperson} 
              ${tables.some((table) => table == "T09") ? style.selected : ""}`}
            id="T09"
            onClick={() => 
              getTables && getTables.some((table) => table.number == "T09" && table.access == "AVALIABLE") ?
              dispatch(changeTable("T09")) : ""
            }
            >
              <div className={style.table_block_place_secondrow_fourperson_seat}>
                <div></div>
                <div></div>
              </div>
              <div className={style.table_block_place_secondrow_fourperson_table}>
                <span style={{backgroundColor: 
                  getTables && getTables.some((table) => table.number == "T09" && table.access == "REZERV") ? "#4D81E7" : 
                  getTables && getTables.some((table) => table.number == "T09" && table.access == "SOON") ? "#EA7E41" : 
                  "#12B3A8"
                }}>
                  </span>T09</div>
              <div className={style.table_block_place_secondrow_fourperson_seat}>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>

          {/* -------------------------third row-------------------------  */}
          <div className={style.table_block_place_thirdrow}>

            <div className={
              `${style.table_block_place_thirdrow_fourperson} 
              ${tables.some((table) => table == "T10") ? style.selected : ""}`}
            id="T10"
            onClick={() => 
              getTables && getTables.some((table) => table.number == "T10" && table.access == "AVALIABLE") ?
              dispatch(changeTable("T10")) : ""
            }
            >
              <div className={style.table_block_place_thirdrow_fourperson_seat}>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className={style.table_block_place_thirdrow_fourperson_table}>
                <span style={{backgroundColor: 
                  getTables && getTables.some((table) => table.number == "T10" && table.access == "REZERV") ? "#4D81E7" : 
                  getTables && getTables.some((table) => table.number == "T10" && table.access == "SOON") ? "#EA7E41" : 
                  "#12B3A8"
                }}>
                  </span>T10</div>
              <div className={style.table_block_place_thirdrow_fourperson_seat}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            <div className={
              `${style.table_block_place_thirdrow_fourperson} 
              ${tables.some((table) => table == "T11") ? style.selected : ""}`}
            id="T11"
            onClick={() => 
              getTables && getTables.some((table) => table.number == "T11" && table.access == "AVALIABLE") ?
              dispatch(changeTable("T11")) : ""
            }
            >
              <div className={style.table_block_place_thirdrow_fourperson_seat}>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className={style.table_block_place_thirdrow_fourperson_table}>
                <span style={{backgroundColor: 
                  getTables && getTables.some((table) => table.number == "T11" && table.access == "REZERV") ? "#4D81E7" : 
                  getTables && getTables.some((table) => table.number == "T11" && table.access == "SOON") ? "#EA7E41" : 
                  "#12B3A8"
                }}>
                  </span>T11</div>
              <div className={style.table_block_place_thirdrow_fourperson_seat}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            <div className={
              `${style.table_block_place_thirdrow_fourperson} 
              ${tables.some((table) => table == "T12") ? style.selected : ""}`}
            id="T12"
            onClick={() => 
              getTables && getTables.some((table) => table.number == "T12" && table.access == "AVALIABLE") ?
              dispatch(changeTable("T12")) : ""
            }
            >
              <div className={style.table_block_place_thirdrow_fourperson_seat}>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className={style.table_block_place_thirdrow_fourperson_table}>
                <span style={{backgroundColor: 
                  getTables && getTables.some((table) => table.number == "T12" && table.access == "REZERV") ? "#4D81E7" : 
                  getTables && getTables.some((table) => table.number == "T12" && table.access == "SOON") ? "#EA7E41" : 
                  "#12B3A8"
                }}>
                  </span>T12</div>
              <div className={style.table_block_place_thirdrow_fourperson_seat}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            <div className={
              `${style.table_block_place_thirdrow_fourperson} 
              ${tables.some((table) => table == "T13") ? style.selected : ""}`} 
            id="T13"
            onClick={() => 
              getTables && getTables.some((table) => table.number == "T13" && table.access == "AVALIABLE") ?
              dispatch(changeTable("T13")) : ""
            }
            >
              <div className={style.table_block_place_thirdrow_fourperson_seat}>
                <div></div>
                <div></div>
              </div>
              <div className={style.table_block_place_thirdrow_fourperson_table}>
                <span style={{backgroundColor: 
                  getTables && getTables.some((table) => table.number == "T13" && table.access == "REZERV") ? "#4D81E7" : 
                  getTables && getTables.some((table) => table.number == "T13" && table.access == "SOON") ? "#EA7E41" : 
                  "#12B3A8"
                }}>
                  </span>T13</div>
              <div className={style.table_block_place_thirdrow_fourperson_seat}>
                <div></div>
                <div></div>
              </div>
            </div>

          </div>
        </div>

        {/* ---------- down ---------- */}
        <div className={style.table_block_actions}>

          <div className={style.table_block_actions_left}>

            <p className={style.table_block_actions_left_title}>{t("Selected Table")}</p>

            <div className={style.table_block_actions_left_list}>
              {
                tables.map((table, index) => {
                  return (
                    <div className={style.table_block_actions_left_list_selected} key={index}>{table}</div>
                  )
                })
              }
            </div>
          </div>

          <div className={style.table_block_actions_right}>
            <button className={style.table_block_actions_right_cancel}
            onClick={() => {
              setTable(false)
              dispatch(resetTable())
            }}
            >{t("Cancel")}</button>
            <button className={style.table_block_actions_right_continue}
            onClick={() => setTable(false)}
            >{t("Continue")}</button>
          </div>

        </div>







      </div>
    </div>
  );
};

export default Table;
