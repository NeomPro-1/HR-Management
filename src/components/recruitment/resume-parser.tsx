
"use client";

import { useState, useActionState, useEffect, useRef } from "react";
import { Upload, Loader2, User, Mail, Phone, Wrench, Briefcase, GraduationCap, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import type { ParseResumeOutput } from "@/ai/flows/resume-parsing";
import { parseResumeAction } from "@/app/(app)/recruitment/actions";

type State = {
  data: ParseResumeOutput | null;
  error: string | null;
  key?: number;
};

const initialState: State = {
  data: null,
  error: null,
  key: 0,
};

export function ResumeParser() {
  const [state, formAction, isPending] = useActionState(parseResumeAction, initialState);
  const [fileName, setFileName] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.key) {
        formRef.current?.reset();
        setFileName("");
    }
  }, [state.key]);


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };


  return (
    <div className="grid lg:grid-cols-3 gap-8 items-start">
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>Resume Parser</CardTitle>
          <CardDescription>Upload a resume to automatically extract candidate information.</CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} action={formAction} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="resume">Upload Resume</Label>
              <div className="relative">
                <Input id="resume" name="resume" type="file" className="hidden" accept=".pdf,.doc,.docx,.txt" onChange={handleFileChange} />
                <Label htmlFor="resume" className="cursor-pointer flex items-center justify-center w-full h-32 border-2 border-dashed rounded-lg hover:bg-muted transition-colors">
                  <div className="text-center p-2">
                    <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground truncate">{fileName || "Click to upload or drag and drop"}</p>
                    <p className="text-xs text-muted-foreground">PDF, DOC, DOCX, TXT</p>
                  </div>
                </Label>
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={isPending || !fileName}>
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Parse Resume
            </Button>
            {state.error && !isPending && <p className="text-sm text-destructive">{state.error}</p>}
          </form>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Candidate Profile</CardTitle>
          <CardDescription>Information extracted from the resume will appear here.</CardDescription>
        </CardHeader>
        <CardContent className="min-h-[400px]">
          {isPending && (
            <div className="flex items-center justify-center h-full py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>

          )}
          {state.data && !isPending && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                 <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                    <User className="h-8 w-8 text-muted-foreground"/>
                 </div>
                 <div>
                    <h3 className="text-2xl font-semibold font-headline">{state.data.candidateName}</h3>
                    <div className="flex flex-col md:flex-row gap-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5"><Mail className="h-4 w-4"/> {state.data.email}</span>
                        <span className="flex items-center gap-1.5"><Phone className="h-4 w-4"/> {state.data.phone}</span>
                    </div>
                 </div>
              </div>
              
              <div className="space-y-4">
                  <div>
                      <h4 className="font-semibold flex items-center gap-2 mb-2"><Wrench className="h-5 w-5 text-primary"/> Skills</h4>
                      <div className="flex flex-wrap gap-2">
                          {state.data.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                      </div>
                  </div>
                  <div>
                      <h4 className="font-semibold flex items-center gap-2 mb-2"><Briefcase className="h-5 w-5 text-primary"/> Experience</h4>
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                          {state.data.experience.map((exp, i) => <li key={i}>{exp}</li>)}
                      </ul>
                  </div>
                  <div>
                      <h4 className="font-semibold flex items-center gap-2 mb-2"><GraduationCap className="h-5 w-5 text-primary"/> Education</h4>
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                           {state.data.education.map((edu, i) => <li key={i}>{edu}</li>)}
                      </ul>
                  </div>
              </div>
            </div>
          )}
          {!state.data && !isPending && (
              <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground py-20">
                <FileText className="h-12 w-12 mb-4" />
                <p className="text-lg font-medium">No candidate data</p>
                <p>Upload a resume to get started.</p>
              </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
