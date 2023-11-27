import styles from "@/components/Adress/editAdress/editAdress.module.css";

export default function EditAdress() {
  return (
    <div>
      <form className={styles.form}>
        <label>City</label>
        <input type="text" placeholder={"City"} className={styles.inputs} />
        <label>Adress Line</label>
        <textarea
          placeholder={"Adress Line (Max 250 character"}
          className={styles.inputs}
          maxLength={250}
        />
        <button className={styles.saveBtn}>Save</button>
      </form>
    </div>
  );
}
