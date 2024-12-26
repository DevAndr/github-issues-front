import { Form } from "@nextui-org/form";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useActionState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { githubIssuesSlice } from "@/redux/slices/githubIssuesSlice.ts";
import "./styles.scss";
import { useSearchParams } from "react-router-dom";
import SelectPageSize from "@/components/select-page-size/SelectPageSize.tsx";
import useGetQueryParams from "@/hooks/use-get-query-params";

function QueryRepositoriesForm() {
  const dispatch = useDispatch();
  const queryParamsLocation = useGetQueryParams();
  const [_, setSearchParams] = useSearchParams();
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const owner = formData.get("owner")?.trim();
      const repo = formData.get("repo")?.trim();

      if (owner && repo) {
        setSearchParams({ owner, repo });
        dispatch(githubIssuesSlice.actions.setQueryDataForIssues({ owner, repo }));
      }

      return { owner, repo };
    },
    null
  );

  useEffect(() => {
    const { owner, repo } = queryParamsLocation;

    if (owner && repo) {
      setSearchParams({ owner, repo });
      dispatch(githubIssuesSlice.actions.setQueryDataForIssues({ owner, repo }));
    }
  }, [queryParamsLocation]);

  console.log({ queryParamsLocation });

  return (
    <Form
      action={submitAction}
      className="form-query-repository"
      validationBehavior="native"
    >
      <Input
        isRequired
        errorMessage="Please enter a valid username"
        labelPlacement="outside"
        name="owner"
        placeholder="Введите имя пользователя"
        type="text"
        value={queryParamsLocation.owner || ""}
        defaultValue={queryParamsLocation.owner || ""}
      />
      <Input
        isRequired
        errorMessage="Please enter a valid repo"
        labelPlacement="outside"
        name="repo"
        placeholder="Введите имя репозитория"
        type="text"
        value={queryParamsLocation.repo || ""}
        defaultValue={queryParamsLocation.repo || ""}
      />
      <div className="flex gap-2 w-full">
        <SelectPageSize />
        <Button type="submit" color="primary">
          Найти
        </Button>
      </div>
    </Form>
  );
}

export default QueryRepositoriesForm;
