function detectType(val: number | string) {
  if (typeof val === "string") {
    val.toLowerCase();
  } else return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide id");
    return;
  }

  return id.toLowerCase();
}
