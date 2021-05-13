import supabase from "src/lib/utils/supabase/init";

export default async (req, res) => {
  const { data, error } = await supabase
    .from("all_weapon_names_for_entity")
    .select("*");
  console.log(data, error);
  return data ? res.status(200).send(data) : res.status(403).send(error);
};
